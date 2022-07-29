export default function EmptySequence(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="relative block h-full rounded-lg border-2 border-blue-800 p-24 text-center hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      onClick={onClick}
    >
      <svg
        className="mx-auto h-12 w-12 text-blue-900"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        />
      </svg>
      <span className="mt-2 block text-sm font-medium text-blue-900">Design a new sequence</span>
    </button>
  );
}
