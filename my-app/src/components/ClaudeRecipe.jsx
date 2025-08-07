import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <div ref={props.ref} id="claudeRecipe">
      <ReactMarkdown>{props.output}</ReactMarkdown>
    </div>
  );
}
