export default function Highlight({ text }: { text: string }) {
    return <span className="bg-gray-200 pl-1 pr-1 rounded-md inline-block font-medium dark:bg-gray-500">{text}</span>;
  }
  