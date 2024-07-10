import { Command, CommandInput, CommandList } from "../ui/command";

const Search = () => {
  return (
    <Command className="rounded-lg border shadow-md max-w-[500px] mx-auto">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList></CommandList>
    </Command>
  );
};

export default Search;
