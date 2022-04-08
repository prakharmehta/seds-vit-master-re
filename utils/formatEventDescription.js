const LINK_REGEXP = /\{\{(.*?)\}\}/g;
const BOLD_REGEXP = /\*(.*?)\*/g;
const ITALIC_REGEXP = /\_(.*?)\_/g;
const UNDERLINE_REGEXP = /\~(.*?)\~/g;
const SUBSCRIPT_REGEXP = /\<\<(.*?)\>\>/g;
const SUPERSCRIPT_REGEXP = /\^(.*?)\^/g;

module.exports.formatEventDescription = async (para) => {
  if (Array.isArray(para)) {
    const formattedParas = para.map(async (para) => {
      return await formatText(para);
    });
    return await Promise.all(formattedParas);
  } else {
    return await formatText(para);
  }
};

module.exports.formatEventDescriptionForMeta = async (para) => {
  if (Array.isArray(para)) {
    const formattedParas = para.map(async (para) => {
      return await formatText(para, false);
    });
    return await Promise.all(formattedParas);
  } else {
    return await formatText(para, false);
  }
};

const formatText = async (para, requireDecoration = true) => {
  para = await formatTextItalic(para, requireDecoration);
  para = await formatLink(para, requireDecoration);
  para = await formatTextBold(para, requireDecoration);
  para = await formatTextUnderline(para, requireDecoration);
  para = await replaceSubScript(para, requireDecoration);
  para = await replaceSuperScript(para, requireDecoration);

  return para;
};

const formatLink = async (para, requireDecoration = true) => {
  return await para.replace(LINK_REGEXP, function (match, token) {
    const values = token.split(",");
    if (values.length === 2 && requireDecoration) {
      return `<a href="${values[1]}" target="_blank">${values[0]}</a>`;
    } else return values[1];
  });
};

const formatTextBold = async (text, requireDecoration = true) => {
  return await text.replace(BOLD_REGEXP, function (match, token) {
    if (requireDecoration) return `<span class="text__bold">${token}</span>`;
    else return token;
  });
};

const formatTextItalic = async (text, requireDecoration = true) => {
  return await text.replace(ITALIC_REGEXP, function (match, token) {
    if (requireDecoration) return `<span class="text__italic">${token}</span>`;
    else return token;
  });
};
const formatTextUnderline = async (text, requireDecoration = true) => {
  return await text.replace(UNDERLINE_REGEXP, function (match, token) {
    if (requireDecoration) return `<span class="text__underline">${token}</span>`;
    else return token;
  });
};

const replaceSubScript = async (text, requireDecoration = true) => {
  return await text.replace(SUBSCRIPT_REGEXP, function (match, token) {
    if (requireDecoration) return `<sub>${token}</sub>`;
    else return token;
  });
};

const replaceSuperScript = async (text, requireDecoration = true) => {
  return await text.replace(SUPERSCRIPT_REGEXP, function (match, token) {
    if (requireDecoration) return `<sup>${token}</sup>`;
    else return token;
  });
};
