
type Example = {
  code: string;
  language?: string;
};

export default function CodeExample({code, language = "javascript"}: Example){
  return(
    <pre>
      <code>
        {code}
      </code>
    </pre>
  );
}