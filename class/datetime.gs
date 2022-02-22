'use strict'

class Datetime {

  /**
   * 日付に関するコンストラクタ
   * @constructor
   * @param {Date|string|number} param - Date オブジェクトでインスタンス生成可能な引数
   */
  constructor(param = new Date()) {
    /** @type {Date} */
    this.date = new Date(param);
  }

  /**
   * Date オブジェクトから委譲されたメソッド
   * NOTE: getMonth, setMonth の戻り値、仮引数は 0 - 11 を 1 - 12 に変更  
   */
  getMonth() { return this.date.getMonth() + 1; }
  setMonth(arg) { return this.date.setMonth(arg - 1); }

  /**
   * format 部分が同じものか比較するメソッド
   * @param {Date} date - 比較対象の Date オブジェクト
   * @param {string} format - 比較するフォーマット
   * @return {boolean} format 部分が同じかどうか
   */
  isSame(date, format = 'yyyy/MM/dd HH:mm:ss') {
    return Datetime.format(this.date, format) === Datetime.format(date, format);
  }

  /**
   * コンストラクタの date オブジェクトを指定のフォーマットで文字列化するメソッド
   * @param {string} format - フォーマットする形式
   * @return {string} フォーマットされた文字列型の日付
   */
  toString(format = 'yyyy/MM/dd HH:mm:ss') {
    const strDate = Datetime.format(this.date, format);
    return strDate;
  }

  /**
   * 指定のフォーマットで日付を文字列化する静的メソッド
   * @param {Date} d - Date オブジェクト 文字列型も可
   * @param {string} format - フォーマットする形式
   * @return {string} フォーマットされた文字列型の日付
   */
  static format(d = new Date(), format = 'yyyy/MM/dd HH:mm:ss') {
    const date = new Date(d);
    const strDate = Utilities.formatDate(date, 'JST', format);
    return strDate;
  }

}