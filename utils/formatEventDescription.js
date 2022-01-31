const LINK_REGEXP = /\{\{(.*?)\}\}/g;
const BOLD_REGEXP = /\*(.*?)\*/g;
const ITALIC_REGEXP = /\_(.*?)\_/g;
const UNDERLINE_REGEXP = /\~(.*?)\~/g;
const SUBSCRIPT_REGEXP = /\<\<(.*?)\>\>/g;
const SUPERSCRIPT_REGEXP = /\^(.*?)\^/g;

module.exports = async (para) => {
  if (Array.isArray(para)) {
    const formattedParas = para.map(async (para) => {
      return await formatText(para);
    });
    return await Promise.all(formattedParas);
  } else {
    return await formatText(para);
  }
};

const formatText = async (para) => {
  para = await formatTextItalic(para);
  para = await formatLink(para);
  para = await formatTextBold(para);
  para = await formatTextUnderline(para);
  para = await replaceSubScript(para);
  para = await replaceSuperScript(para);

  return para;
};

const formatLink = async (para) => {
  return await para.replace(LINK_REGEXP, function (match, token) {
    const values = token.split(",");
    if (values.length === 2) {
      return `<a href="${values[1]}" target="_blank">${values[0]}</a>`;
    }
    return token;
  });
};

const formatTextBold = async (text) => {
  return await text.replace(BOLD_REGEXP, function (match, token) {
    return `<span class="text__bold">${token}</span>`;
  });
};

const formatTextItalic = async (text) => {
  return await text.replace(ITALIC_REGEXP, function (match, token) {
    return `<span class="text__italic">${token}</span>`;
  });
};
const formatTextUnderline = async (text) => {
  return await text.replace(UNDERLINE_REGEXP, function (match, token) {
    return `<span class="text__underline">${token}</span>`;
  });
};

const replaceSubScript = async (text) => {
  return await text.replace(SUBSCRIPT_REGEXP, function (match, token) {
    return `<sub>${token}</sub>`;
  });
};

const replaceSuperScript = async (text) => {
  return await text.replace(SUPERSCRIPT_REGEXP, function (match, token) {
    return `<sup>${token}</sup>`;
  });
};
