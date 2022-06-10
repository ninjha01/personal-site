export const SequenceCard = (props: { sequenceName: string; sequence: string; annotations: any[] }) => {
  const { sequence, sequenceName } = props;

  return (
    <section>
      <div className="mx-8 mt-16 overflow-hidden bg-white shadow-2xl sm:rounded-lg">
        <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{sequenceName}</h3>
        </div>
        <div className="break-all px-4 py-5 sm:px-6">{sequence}</div>
      </div>
    </section>
  );
};
