import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Title = "Select";
const markdown = `
## ${Title}
`;
const Intro = () => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </>
  );
};
export default Intro;
