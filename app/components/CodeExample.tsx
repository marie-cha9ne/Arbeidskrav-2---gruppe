
type Example = {
  code: string;
  className?: string;
};

export default function CodeExample({code, className}: Example){
  return(
    <pre className={className}>
      <code>
        {code}
      </code>
    </pre>
  );
}
// <pre> står for preformatted text og betyr at all text inni pre vises akkurat som den er skrevet. inkl mellom rom, linjeskift og inntrykk.