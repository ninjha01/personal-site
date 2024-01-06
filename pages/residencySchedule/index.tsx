import Head from "next/head";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Shell } from "../../components/Shell";

type DecayFunction = {
  name: string;
  fn: (rank: number, totalChoices: number) => number;
};

const Schedule = () => {
  const [userRankings, setUserRankings] = useState<UserRanking[]>([]);

  return (
    <>
      <Head>
        <title>Nishant Jha</title>
        <link rel="canonical" href="https://nishantjha.org/" />
      </Head>
      <Shell>
        <h2 className="pb-12 text-4xl font-bold text-zinc-400">
          Residency Scheduler
        </h2>
        <UserSimulator
          userRankings={userRankings}
          onGenerateUsers={(users: UserRanking[]) => {
            setUserRankings(users);
          }}
        />
        <ComputeAssignments userRankings={userRankings} />
      </Shell>
    </>
  );
};

export const UserSimulator = ({
  userRankings,
  onGenerateUsers,
}: {
  userRankings: UserRanking[];
  onGenerateUsers: (users: UserRanking[]) => void;
}) => {
  const [numUsers, setNumUsers] = useState(10);

  const generateUsers = () => {
    const newUserRankings = generateFakeUserRankings(numUsers);
    onGenerateUsers(newUserRankings);
  };
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="numUsers" className="text-lg">
        Number of Residents
        <input
          type="number"
          id="numUsers"
          key="numUsers-input"
          name="numUsers"
          placeholder="Number of Users"
          defaultValue={numUsers}
          onChange={(e) => setNumUsers(parseInt(e.target.value))}
          className="input mt-2 w-full"
          autoFocus
        />
      </label>

      <button
        onClick={generateUsers}
        className="btn w-full bg-blue-600 text-zinc-100"
      >
        Generate Random Cohort
      </button>

      {userRankings.length > 0 && (
        <details>
          <summary className="-ml-1 py-2 text-2xl font-bold text-zinc-400">
            User Rankings
            <p className="pl-5 text-sm"> (Click to expand)</p>
          </summary>
          <ul className="grid grid-cols-2 gap-4 text-lg md:grid-cols-8">
            {userRankings.map((user) => (
              <li key={user.id} className="text-zinc-200">
                <p className="pb-1 font-bold">{user.id}</p>
                <ol className="list-inside list-decimal">
                  {user.ranking.map((r) => (
                    <li key={r.id}>{r.id}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
};

const decayFunctions: DecayFunction[] = [
  {
    name: "Linear",
    fn: (rank, totalChoices) => {
      return totalChoices - rank + 1;
    },
  },
  {
    name: "Exponential",
    fn: (rank, totalChoices) => {
      return Math.pow(2, totalChoices - rank);
    },
  },
  {
    name: "Logarithmic",
    fn: (rank, totalChoices) => {
      return Math.log(totalChoices - rank + 1);
    },
  },
];

export const ComputeAssignments = ({
  userRankings,
}: {
  userRankings: UserRanking[];
}) => {
  const [assignments, setAssignments] = useState<UserAssignment[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [decayFunctionIdx, setDecayFunctionIdx] = useState(0);
  const decayFunction = decayFunctions[decayFunctionIdx];

  useEffect(
    function computeAssignmentsOnUserRankingsChange() {
      const assignChoices = () => {
        const newAssignments = fairlyAllocateChoices(userRankings);
        setAssignments(newAssignments);
        const newStats = computeSatisfactionStats({
          assignments: newAssignments,
          decayFunction: decayFunction.fn,
        });
        setStats(newStats);
      };

      if (userRankings.length > 0) {
        assignChoices();
      }
    },
    [userRankings, decayFunctionIdx, decayFunction]
  );

  return (
    <div className="mt-8 flex flex-col gap-8 border-t pt-8">
      <div className="items-between flex flex-col justify-between gap-8 md:flex-row">
        <label
          htmlFor="decayFunction"
          className="flex w-full flex-col gap-2 text-lg"
        >
          Decay Function
          <select
            value={decayFunctionIdx}
            onChange={(e) => setDecayFunctionIdx(parseInt(e.target.value))}
            className="input"
          >
            {decayFunctions.map((decayFunction, idx) => (
              <option key={idx} value={idx}>
                {decayFunction.name}
              </option>
            ))}
          </select>
        </label>
        <div className="w-full">
          <h3>Satisfaction Scale</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Decay</th>
              </tr>
            </thead>
            <tbody>
              {userRankings.map((_, rank) => (
                <tr key={rank}>
                  <td>{rank + 1}</td>
                  <td>
                    {computeSatisfactionScore({
                      assignment: {
                        id: "test",
                        assignment: { id: "placeholder", rank: rank + 1 },
                      },
                      totalChoices: userRankings.length,
                      decayFunction: decayFunction.fn,
                    }).toFixed(1)}
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {stats && (
        <div>
          <h2 className="text-lg font-bold text-zinc-400">
            Satisfaction Stats
          </h2>
          <p className="pb-8 text-zinc-200">
            (Higher is better, max is {assignments.length})
          </p>
          <p className="flex flex-col text-zinc-200">
            Mean Satisfaction
            <strong> {stats.meanSatisfaction.toFixed(1)} %</strong>
          </p>
          <p className="flex flex-col text-zinc-200">
            Min Satisfaction
            <strong> {stats.minSatisfaction.toFixed(1)} %</strong>
          </p>
          <p className="flex flex-col text-zinc-200">
            Max Satisfaction
            <strong> {stats.maxSatisfaction.toFixed(1)} %</strong>
          </p>
        </div>
      )}

      {assignments.length > 0 && (
        <div className="-ml-4 ">
          <h2 className="pb-2 pl-4 text-2xl font-bold text-zinc-400">
            Assignments
          </h2>
          <table className="table text-zinc-200">
            <thead>
              <tr>
                <th className="py-2 pr-4">User</th>
                <th className="py-2 pr-4">Assigned Choice</th>
                <th className="py-2 pr-4">Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-4 py-2">{assignment.id}</td>
                  <td className="px-4 py-2">{assignment.assignment.id}</td>
                  <td className="px-4 py-2">
                    {computeSatisfactionScore({
                      assignment,
                      totalChoices: assignments.length,
                      decayFunction: decayFunction.fn,
                    }).toFixed(1)}
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/**
 * Generates a list of fake user rankings.
 * Each user is assigned a set of choices, split into two categories: popular and regular.
 * The first half of the total choices are considered 'popular', and the second half
 * are 'regular'. The choices are labeled from 'A' onwards (e.g., 'A', 'B', 'C', etc.).
 *
 * For each user, the export function:
 * 1. Shuffles the popular choices and assigns them ranks in the top half (ensuring
 *    these choices are generally ranked higher).
 * 2. Shuffles the regular choices and assigns them ranks in the bottom half.
 * 3. Combines these two shuffled and ranked sets of choices to form the user's
 *    complete ranking list.
 *
 * This setup ensures that popular choices are more likely to be ranked higher by
 * the majority of users, simulating a scenario where certain choices are universally
 * more preferred.
 */
export function generateFakeUserRankings(count: number): UserRanking[] {
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

export function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

export function fairlyAllocateChoices(
  userRankings: UserRanking[]
): UserAssignment[] {
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
// returns percentage satisfaction scores
export const computeSatisfactionStats = ({
  assignments,
  decayFunction,
}: {
  assignments: UserAssignment[];
  decayFunction: (rank: number, totalChoices: number) => number;
}) => {
  const totalChoices = assignments.length;

  let satisfactionScores = assignments.map((assignment) =>
    computeSatisfactionScore({
      assignment,
      totalChoices,
      decayFunction,
    })
  );

  const meanSatisfaction =
    satisfactionScores.reduce((a, b) => a + b, 0) / satisfactionScores.length;
  const modeSatisfaction = satisfactionScores
    .sort(
      (a, b) =>
        satisfactionScores.filter((v) => v === a).length -
        satisfactionScores.filter((v) => v === b).length
    )
    .pop();
  const minSatisfaction = Math.min(...satisfactionScores);
  const maxSatisfaction = Math.max(...satisfactionScores);

  return {
    meanSatisfaction,
    modeSatisfaction,
    minSatisfaction,
    maxSatisfaction,
  };
};

export const computeSatisfactionScore = ({
  assignment,
  totalChoices,
  decayFunction,
}: {
  assignment: UserAssignment;
  totalChoices: number;
  decayFunction: (rank: number, totalChoices: number) => number;
}) => {
  const maxPossibleSatisfaction = decayFunction(1, totalChoices); // Assuming the best rank is 1
  const assignedChoiceRank = assignment.assignment.rank;
  const decay = decayFunction(assignedChoiceRank, totalChoices);
  return (decay / maxPossibleSatisfaction) * 100; // Convert to percentage
};

export const choiceSchema = z.object({
  id: z.string().uuid(),
  rank: z.number(),
});

export const rankingSchema = z.array(choiceSchema);

export const userRankingSchema = z.object({
  id: z.string().uuid(),
  ranking: rankingSchema,
});
export type UserRanking = z.infer<typeof userRankingSchema>;

export const userAssignmentSchema = z.object({
  id: z.string().uuid(),
  assignment: choiceSchema,
});
export type UserAssignment = z.infer<typeof userAssignmentSchema>;

export default Schedule;
