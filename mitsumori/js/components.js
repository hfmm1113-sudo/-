// 画面オブジェクト
export const UI = {
    Preview: document.querySelector('#menuPreview'),
    Report: document.querySelector('#menuReport'),
    EstForm: {
        Base: document.querySelector('#estBaseForm'),
        Main: document.querySelector('#estMainForm'),
        Spec: document.querySelector('#estSpecForm'),
    },
    Button: {
        Calc: document.querySelector('#calcBtn'),
        Add: {
            BrownShrink: document.querySelector('#brownShrinkAddBtn'),
            WFlostShrink: document.querySelector('#wFlostShrinkAddBtn'),
        },
        Back: document.querySelector('#backBtn'),
        Retry: document.querySelector('#retryBtn'),
        Exec: document.querySelector('#execBtn'),
    },
    CreatedAt: {
        In: document.querySelector('#createdAt'),
        Out: document.querySelector('#outCreatedAt'),
    },
    CaseNo: {
        In: document.querySelector('#caseNo'),
        Out: document.querySelector('#outCaseNo'),
    },
    CustomerName: {
        In: document.querySelector('#customerName'),
        Out: document.querySelector('#outCustomerName'),
    }, 
};

// 日付ユーティリティオブジェクト
export const DateUtil = {
    today: () => {
        return dayjs();
    },
    /**
     * 今日を指定の書式で取得する
     * @param {String} fmt 書式文字列
     * @returns 整形された今日
     */
    formatToday: (fmt) => {
        return dayjs().format(fmt);
    }
};

// 文字列ユーティリティオブジェクト
export const StringUtil = {
    /**
     * 指定値を XXXXX-XXX 形式に生成する
     * なお、英数字以外は除去する
     * @param {String} value 整形対象値
     * @returns 整形結果
     */
    formatCode: (value) => {
        // 英数字以外を除去する
        const chars = value.toString().replace(/[^a-zA-Z0-9]/g, "");
        
        // XXXXX-XXX に整形
        return chars.replace(
            /^([a-zA-Z0-9]{5})([a-zA-Z0-9]{0,3}).*$/,
            (_, p1, p2) => {
                return p2 ? `${p1}-${p2}` : p1;
            }
        );
    }
};

// サービスユーティリティオブジェクト
export const ServiceUtil = {
    /**
     * 指定フォームオブジェクトをマージする
     * 【例】
     * Toolbox.mergeForm(form1, form2, form3,)
     * @param  {...any} forms マージ対象のフォームオブジェクト
     * @returns マージしたフォームオブジェクト
     */
    mergeForms: (...forms) => {
        const merged = new FormData();
        
        forms.forEach(form => {
            const fd = new FormData(form);
            for (const [key, value] of fd.entries()) {
                merged.append(key, value);
            }
        });

        return merged;
    },
};