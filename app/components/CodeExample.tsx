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