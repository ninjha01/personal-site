export const SequenceCard = (props: { sequenceName: string; sequence: string; annotations: any[] }) => {
  const { sequence, sequenceName } = props;

  return (
    <section>
      <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg mt-16 mx-8">
        <div className="bg-white px-4 py-4 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{sequenceName}</h3>
        </div>
        <div className="px-4 py-5 sm:px-6 break-all">{sequence}</div>
      </div>
    </section>
  );
};
