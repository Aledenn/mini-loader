module.exports = function (source) {
  // source
  const reg = /(?<=\.)(.*?)(?={)/g; //获取字符串所有类名的正则
  console.log(reg)
  const classKeyMap = Object.fromEntries(
    source.match(reg).map((str) => [str.trim(), str.trim()])
  ); //取出字符串中原始 css类名
  
  return `/**__CSS_SOURCE__${source}*//**__CSS_CLASSKEYMAP__${JSON.stringify(
    classKeyMap
  )}*/`;
};
