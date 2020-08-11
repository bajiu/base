export class ExReg {
    constructor() {
        this.createReg();
        this.modifierReg();
        this.turnReg();
        this.charReg();
        this.scopeReg();
        this.assertReg();
    }


    str1 = "she is a happy girl. where Is she?";

    /**
     * 有两种方法实例化RegExp对象 , 字面量和构造函数
     */
    createReg() {
        const reg1 = /\bis\b/g;
        const reg2 = new RegExp('\\bis\\b', 'g');
        // ------
        const result1 = this.str1.replace(reg1, 'create');
        console.log(result1);
        // ------
        const result2 = this.str1.replace(reg2, 'create');
        console.log(result2);
    }

    /**
     * 修饰符
     * g : global 全文搜索，不添加，搜索到第一个匹配停止。
     * i : ignore case 忽略大小写，默认大小写敏感
     * m : multiple lines 多行搜索
     */

    modifierReg() {
        const str = "she is a happy girl.\n where Is she?"

        const reg1 = /\bis\b/g;
        const result1 = str.replace(reg1, '0');
        console.log(result1);
        // ------
        const reg2 = /\bis\b/gi;
        const result2 = str.replace(reg2, '0');
        console.log(result2);
    }

    /**
     * 转译字符
     * \ 是转义字符，其后面的字符会代表不同的意思，转义字符主要有三个作用
     * 1. 为了匹配不方便显示的特殊字符，比如换行，tab符号等
     * 2. 正则中预先定义了一些代表特殊意义的字符，比如\w等
     * 3. 在正则中某些字符有特殊含义，转义字符可以让其显示自身的含义
     */
    turnReg() {
        /**
         \n     匹配换行符
         \r     匹配回车符
         \t     匹配制表符，也就是tab键
         \v     匹配垂直制表符
         \x20   20是2位16进制数字，代表对应的字符
         \u002B 002B是4位16进制数字，代表对应的字符
         \u002B 002B是4位16进制数字，代表对应的字符
         \w     匹配任何一个字母或者数字或者下划线
         \W     匹配任何一个字母或者数字或者下划线以外的字符
         \s     匹配空白字符，如空格，tab等
         \S     匹配非空白字符
         \d     匹配数字字符，0~9
         \D     匹配非数字字符
         \b     匹配单词的边界
         \B     匹配非单词边界
         \\     匹配\本身
         更多参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
         */
            // 寻找以A开头的单词
        const str1 = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
        const reg1 = /\b[aA]\w+/g;
        const result1 = str1.match(reg1);
        console.table(result1);
        // ------
        // 寻找四个数
        const str2 = "015 354 8787 687351 3512 8735";
        const reg2 = /\d{4}/g;
        const result2 = str2.match(reg2);
        console.table(result2);
    }

    /**
     * 分类符 []
     * 这个符号用来表示逻辑关系或，比如[abc]表示a或者b或c.[-.]表示符号-或者.号
     * 1. /[-.(]/ 在符号中的连字符-放在第一位表示连字符本身，如果放在中间，表示"从..到.."，比如[a-z]表示a-z
     * 2. [.)] 括号中的特殊符号不需要转义，就表示其本身
     * 3. [^ab] 括号中的^表示非，anythings except a and b
     * 4. (a|b) 表示a或者b，但是它有更强大的功能....
     *
     */
    charReg() {
        const str1 = "The lynk is quite a link don't you think? l nk l(nk";
        const reg1 = /l[yi (]nk/g;
        const result1 = str1.match(reg1);
        console.log(result1);

    }

    /**
     * 量词
     * ~贪婪模式~
     * 尽可能多的匹配。
     *
     * ~非贪婪模式~
     * 让正则表达式尽可能少的匹配，也就是说一旦成功匹配不再继续尝试。在{}后面加个?就是非贪婪模式{}?
     */
    scopeReg() {
        /**
         *  ?  出现零次或一次（最多出现一次）
         *  +  出现一次或多次（至少出现一次）
         *  *  出现零次或多次（任意次）
         * {n} 出现n次
         *{n,m}出现n到m次
         * {n,}至少出现n次
         */
        const str1 = "12345678";
        const reg1 = /\d{3,6}/g,
            reg2 = /\d{3,5}?/g;
        const result1 = str1.match(reg1),
            result2 = str1.match(reg2);
        console.log(result1);
        console.log(result2);


    }
    /**
     * 分组捕获
     *
     *
     */
    capturingGroups() {

    }

    /**
     * 断言匹配
     * 正则表达式从文本头部向尾部开始解析，文本尾部方向称为【 前 】
     *【 前瞻 】 就是在正则表达式匹配到规则的时候，向前检查是否符合断言，【后顾/后瞻】  方向相反。
     * JavaScript不支持【后顾】
     * 符合和不符合特定断言称为【肯定/正向】匹配和【否定/负向】匹配
     */
    assertReg() {
        // 正向前瞻 exp(?=assert)
        // 负向前瞻 exp(?!assert)
        const str1 = "a123456789a";
        const reg1 = /\d(?=\d)/g,
            reg2 = /\d(?!\d)/g;
        const result1 = str1.match(reg1),
            result2 = str1.match(reg2);
        console.log(result1);
        console.log(result2);


    }




    demo1() {
        const test1 = "asdasdad123123fasdsgkjn5iji4j59gjrenifuni4jf9j3cuenc98392j9wdcmdc";
        const reg1 = /ad/
        console.log(test1.match(reg1));
    }

}