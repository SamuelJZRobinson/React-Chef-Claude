import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <div id="claudeRecipe">
      <ReactMarkdown>{props.output}</ReactMarkdown>
    </div>
  );
}
