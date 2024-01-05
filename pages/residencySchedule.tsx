import Head from "next/head";
import { z } from "zod";
import { useState } from "react";

import { Shell } from "../components/Shell";
const choiceSchema = z.object({
  id: z.string().uuid(),
  rank: z.number(),
});

const rankingSchema = z.array(choiceSchema);

const userRankingSchema = z.object({
  id: z.string().uuid(),
  ranking: rankingSchema,
});
type UserRanking = z.infer<typeof userRankingSchema>;

const userAssignmentSchema = z.object({
  id: z.string().uuid(),
  assignment: choiceSchema,
});
type UserAssignment = z.infer<typeof userAssignmentSchema>;

const Schedule = () => {
  const [numUsers, setNumUsers] = useState(10);
  const [userRankings, setUserRankings] = useState<UserRanking[]>([]);
  const [assignments, setAssignments] = useState<UserAssignment[]>([]);
  const [stats, setStats] = useState<any>(null);

  const generateUsers = () => {
    const newUserRankings = generateFakeUserRankings(numUsers);
    setUserRankings(newUserRankings);
    setAssignments([]);
    setStats(null);
  };

  const assignChoices = () => {
    const newAssignments = fairlyAllocateChoices(userRankings);
    setAssignments(newAssignments);
    const newStats = computeSatisfactionScores(newAssignments, userRankings);
    setStats(newStats);
  };

  return (
    <>
      <Head>
        <title>Nishant Jha</title>
        <link rel="canonical" href="https://nishantjha.org/" />
      </Head>
      <Shell>
        <div className="flex flex-col items-center">
          <span className="space-x-4 font-bold text-zinc-400">
            <input
              type="number"
              id="numUsers"
              key="numUsers-input"
              name="numUsers"
              placeholder="Number of Users"
              defaultValue={numUsers}
              onChange={(e) => setNumUsers(parseInt(e.target.value))}
              className="input"
              autoFocus
            />
            <button
              onClick={generateUsers}
              className="btn bg-blue-600 text-zinc-100"
            >
              Generate Random Cohort
            </button>
          </span>
          <div className="mt-4 space-y-8 ">
            {userRankings.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-zinc-400">
                  User Rankings:
                </h2>
                <ul className="grid grid-cols-8 gap-4">
                  {userRankings.map((user) => (
                    <li key={user.id} className="text-zinc-200">
                      {user.id.slice(0, 10)}
                      <ol className="list-inside list-decimal">
                        {user.ranking.map((r) => (
                          <li key={r.id}>{r.id}</li>
                        ))}
                      </ol>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={assignChoices}
              className="btn bg-emerald-600 text-zinc-100"
            >
              Assign Choices & Compute Stats
            </button>

            {assignments.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-zinc-400">
                  Assignments:
                </h2>
                <table className="table text-zinc-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">User</th>
                      <th className="px-4 py-2">Assigned Choice</th>
                      <th className="px-4 py-2">Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map((assignment) => (
                      <tr key={assignment.id}>
                        <td className="px-4 py-2">{assignment.id}</td>
                        <td className="px-4 py-2">
                          {assignment.assignment.id}
                        </td>
                        <td className="px-4 py-2">
                          {assignments.length - assignment.assignment.rank + 1}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {stats && (
              <div>
                <h2 className="text-lg font-bold text-zinc-400">
                  Satisfaction Stats: (Higher is better, max is{" "}
                  {assignments.length})
                </h2>
                <p className="text-zinc-200">
                  Mean Satisfaction: {stats.meanSatisfaction}
                </p>
                <p className="text-zinc-200">
                  Min Satisfaction: {stats.minSatisfaction}
                </p>
                <p className="text-zinc-200">
                  Max Satisfaction: {stats.maxSatisfaction}
                </p>
              </div>
            )}
          </div>
        </div>
      </Shell>
    </>
  );
};

function generateFakeUserRankings(count: number): UserRanking[] {
  const totalChoices = Array.from({ length: count }, (_, i) =>
    String.fromCharCode(65 + i)
  ); // Generate choices A-J for count 10
  const popularChoices = totalChoices.slice(0, count / 2); // First half are popular choices
  const regularChoices = totalChoices.slice(count / 2); // Second half are regular choices
  const userRankings: UserRanking[] = [];

  for (let i = 0; i < count; i++) {
    // Shuffle and assign ranks within each group
    const shuffledPopular = shuffle(popularChoices).map((choice, index) => ({
      id: choice,
      rank: index + 1, // Top half ranks
    }));

    const shuffledRegular = shuffle(regularChoices).map((choice, index) => ({
      id: choice,
      rank: index + 1 + count / 2, // Bottom half ranks
    }));

    // Combine and assign to user
    userRankings.push({
      id: `user-${i}`,
      ranking: [...shuffledPopular, ...shuffledRegular],
    });
  }

  return userRankings;
}

// Helper function to shuffle an array
function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

function fairlyAllocateChoices(userRankings: UserRanking[]): UserAssignment[] {
  // Helper function to get the highest remaining rank for a user
  const getTopChoice = (
    userRanking: UserRanking,
    allocatedChoices: Set<string>
  ) => {
    return userRanking.ranking.find(
      (choice) => !allocatedChoices.has(choice.id)
    );
  };

  let allocatedChoices = new Set<string>();
  let assignments: UserAssignment[] = [];

  while (allocatedChoices.size < userRankings.length) {
    // Sort users by their top remaining choice
    userRankings.sort((a, b) => {
      const aChoice = getTopChoice(a, allocatedChoices);
      const bChoice = getTopChoice(b, allocatedChoices);
      return (aChoice?.rank || Infinity) - (bChoice?.rank || Infinity);
    });

    // Allocate the top choice for each user
    userRankings.forEach((user) => {
      const topChoice = getTopChoice(user, allocatedChoices);
      if (topChoice) {
        allocatedChoices.add(topChoice.id);
        assignments.push({ id: user.id, assignment: topChoice });
      }
    });
  }

  return assignments;
}

// Function to compute satisfaction scores
function computeSatisfactionScores(
  assignments: UserAssignment[],
  userRankings: UserRanking[]
) {
  let satisfactionScores = assignments.map((assignment) => {
    const userRanking = userRankings.find((user) => user.id === assignment.id);
    const assignedRank = assignment.assignment.rank;
    const topChoiceRank = userRanking?.ranking[0].rank || 0;
    return topChoiceRank - assignedRank + assignments.length;
  });

  // Calculating mean, min, and max
  const meanSatisfaction =
    satisfactionScores.reduce((a, b) => a + b, 0) / satisfactionScores.length;
  const minSatisfaction = Math.min(...satisfactionScores);
  const maxSatisfaction = Math.max(...satisfactionScores);

  return {
    meanSatisfaction,
    minSatisfaction,
    maxSatisfaction,
  };
}

export default Schedule;
