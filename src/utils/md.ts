import { parseCaption } from "./dantecalderon.utils";

export const inlineCode = (text: string) => {
  return `\`${text}\``;
};

export const bold = (text: string) => {
  return `**${text}**`;
};

export const italic = (text: string) => {
  return `_${text}_`;
};

export const strikethrough = (text: string) => {
  return `~~${text}~~`;
};

export const underline = (text: string) => {
  return `<u>${text}</u>`;
};

export const link = (text: string, href: string) => {
  return `[${text}](${href})`;
};

export const codeBlock = (text: string, language?: string) => {
  return `\`\`\`${language}
${text}
\`\`\``;
};

export const heading1 = (text: string) => {
  return `# ${text}`;
};

export const heading2 = (text: string) => {
  return `## ${text}`;
};

export const heading3 = (text: string) => {
  return `### ${text}`;
};

export const quote = (text: string) => {
  // the replace is done to handle multiple lines
  return `> ${text.replace(/\n/g, "  \n>")}`;
};

export const bullet = (text: string) => {
  return `- ${text}`;
};

export const todo = (text: string, checked: boolean) => {
  return checked ? `- [x] ${text}` : `- [ ] ${text}`;
};

export const image = (captionData: string, href: string) => {
  const { caption, options } = parseCaption(captionData);
  let md = `![${caption}](${href})`;

  if(options.width) {
    md = `<div class="mdx-image-container with-border wone g1" style="max-width: ${options.width}px; border-color: red;">

${md}

</div>`
  }
  
  return md;
};

export const addTabSpace = (text: string, n = 0) => {
  const tab = "	";
  for (let i = 0; i < n; i++) text = tab + text;
  return text;
};

export const divider = () => {
  return "---";
};
