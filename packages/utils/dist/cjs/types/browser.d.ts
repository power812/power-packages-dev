/** 引用 https://github.com/yangtianxia/ua-browser */
export type HashOptions = Record<string, string>;
export type OsVersionType = 'Android' | 'iOS' | 'Debian' | 'Windows Phone' | 'MacOS' | 'WebOS' | 'HarmonyOS' | 'Windows';
export type EnvWebview = {
    isWebview: boolean;
};
export type EnvPart = Record<'version' | 'osVersion' | 'platfrom' | 'languge', string>;
export type EnvOption = EnvPart & EnvWebview & {
    engine: 'Trident' | 'Presto' | 'WebKit' | 'Gecko' | 'KHTML' | 'Blink' | 'EdgeHTML' | 'unknown';
    browser: 'Safari' | 'Chrome' | 'IE' | 'Edge' | 'Firefox' | 'Firefox Focus' | 'Chromium' | 'Opera' | 'Vivaldi' | 'Yandex' | 'Arora' | 'Lunascape' | 'QupZilla' | 'Coc Coc' | 'Kindle' | 'Iceweasel' | 'Konqueror' | 'Iceape' | 'SeaMonkey' | 'Epiphany' | '360' | '360EE' | '360SE' | 'UC' | 'QQBrowser' | 'QQ' | 'Baidu' | 'Maxthon' | 'Sogou' | 'Liebao' | '2345Explorer' | '115Browser' | 'TheWorld' | 'OPPO' | 'XiaoMi' | 'Quark' | 'Qiyu' | 'Wechat' | 'WechatWork' | 'Taobao' | 'Alipay' | 'Weibo' | 'Douban' | 'Suning' | 'iQiYi' | 'DingTalk' | 'Huawei' | 'Vivo' | 'Firefox Nightly' | 'Wechat Miniapp' | 'Douyin' | 'unknown';
    os: 'Windows' | 'Linux' | 'MacOS' | 'Android' | 'HarmonyOS' | 'Ubuntu' | 'FreeBSD' | 'Debian' | 'Windows Phone' | 'BlackBerry' | 'MeeGo' | 'Symbian' | 'iOS' | 'Chrome OS' | 'WebOS' | 'unknown';
    device: 'Mobile' | 'Tablet' | 'Pc';
};
declare global {
    const __wxjs_environment: string;
    const chrome: {
        adblock2345: any;
        common2345: any;
    };
    const showModalDialog: any;
    const u2f: any;
    interface Navigator {
        browserLanguage: string;
        userAgentData: Record<string, any>;
        connection: Record<string, any>;
    }
}
export {};
export declare const getLanguage: () => string;
export declare const isWechatMiniapp: () => boolean;
export declare const isWebview: (ua: string) => boolean;
export declare class UaBrowser {
    private ua;
    private version;
    private osVersion;
    private getOs;
    private getEngine;
    private getBrowser;
    private getDevice;
    private getChromeVars;
    private setUA;
    constructor(ua?: string);
    getEnv(ua?: string): {
        version: string;
        osVersion: string;
        engine: string;
        browser: string;
        os: string;
        device: string;
        isWebview: boolean;
        language: string;
        platfrom: string;
    };
}
declare const _default: {
    version: string;
    osVersion: string;
    engine: string;
    browser: string;
    os: string;
    device: string;
    isWebview: boolean;
    language: string;
    platfrom: string;
};
export default _default;
