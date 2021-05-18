// import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function RenderMDX({ content }: Props) {
  return (
    // <ReactMarkdown
    // // components={{
    // //   img: (image: any) => {
    // //     console.log(image);
    // //     return (
    // //       <div>
    // //         <img src={image.src} alt={} />
    // //       </div>
    // //     );
    // //   },
    // // }}
    // >
    //   {content}
    // </ReactMarkdown>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
