/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const mounth=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let dtes=date.split(" ");
    let yyyy=dtes[2];
    let mm=(mounth.indexOf(dtes[1])+1).toString();
    if(mm.length==1)mm='0'+mm;
    let dd =dtes[0].replace("st","").replace("th","").replace("nd","").replace("rd","")
    if(dd.length==1)dd='0'+dd;
    return yyyy+'-'+mm+'-'+dd;
};
// @lc code=end

