import {
    UI,
    DateUtil,
    StringUtil,
    ServiceUtil,
} from './components.js';

const LABEL_SIZE_MAP_WHITE = {
    K11261: "70*90",
    K11260: "80*90",
    K11262: "75*115",
    K11266: "85*90",
    K11263: "80*115",
    K11264: "100*140",
    K11265: "仮）100*140",
};

const LABEL_SIZE_MAP_SILVER = {
    K11220: "75*115",
    K11221: "80*115",
    K11222: "100*140",
    K11: "仮）100*140",
};

const LABEL_SIZE_MAP_COLOR = {
    K11291: "80*90",
    K11293: "80*90",
    K11294: "80*90",
    K11295: "90*110",
    K11296: "90*110",
    K11297: "90*110",
    K11292: "90*110",
    K11298: "90*110",
    K11508: "90*120",
    K11505: "74*95",
};

const LABEL_SIZE_MAP_BROWN = {
    H10080: "140*45",
    H10100: "148*50",
    H10115: "153*52",
    H10120: "160*60",
    H10130: "160*60",
};

const LABEL_SIZE_MAP_WFLOST = {
    H10083: "90*120",
    H1011K: "100*140",
    H10107: "100*140",
    H10122: "120*160",
    H1011S: "100*140",
};

const LABEL_SIZE_MAP_PLASTIC = {
    H15033: "130*45",
    H15034: "140*45",
    H15030: "150*50",
    H15031: "155*55",
    H15032: "170*60",
};

const BOX_SIZE_MAP_BROWN = {
    H10080: "55*55*110",
    H10100: "60*60*120",
    H10115: "65*65*130",
    H10120: "70*70*140",
    H10130: "75*75*150",
};

const BOX_SIZE_MAP_WFLOST = {
    H10083: "55*55*110",
    H1011K: "60*60*120",
    H10107: "65*65*130",
    H10122: "70*70*140",
    H1011S: "65*65*130",
};

const BOX_SIZE_MAP_PLASTIC = {
    H15033: "未定",
    H15034: "45*45*87",
    H15030: "50*50*100",
    H15031: "55*55*110",
    H15032: "60*60*120",
};

function setupLabelSize(selectId, buttonId, sizeMap) {
    const select = document.getElementById(selectId);
    const button = document.getElementById(buttonId);

    if (!select || !button) return;

    const updateLabelSize = () => {
        const size = sizeMap[select.value];

        button.textContent = size
            ? `ラベルサイズ：${size}まで`
            : "ラベルサイズ：◯◯ x ◯◯ まで";
    };

    select.addEventListener("change", updateLabelSize);

    updateLabelSize();
}
function setupBoxSize(selectId, buttonId, sizeMap) {
    const select = document.getElementById(selectId);
    const button = document.getElementById(buttonId);

    if (!select || !button) return;

    const updateBoxSize = () => {
        const size = sizeMap[select.value];

        button.textContent = size
            ? `化粧箱サイズ：${size}まで`
            : "化粧箱サイズ：◯◯ x ◯◯ まで";
    };

    select.addEventListener("change", updateBoxSize);

    updateBoxSize();
}

window.addEventListener('load', () => {

    const createdAt = sessionStorage.getItem('createdAt');
    const caseNo = sessionStorage.getItem('caseNo');
    const customerName = sessionStorage.getItem('customerName');

    UI.CreatedAt.In.value =
        createdAt ? createdAt : DateUtil.formatToday('YYYY-MM-DD');

    UI.CaseNo.In.value =
        caseNo ? caseNo : '';

    UI.CustomerName.In.value =
        customerName ? customerName : '';

    sessionStorage.clear();

    setupLabelSize(
        'almiWhiteSize',
        'almiWhiteLabelBtn',
        LABEL_SIZE_MAP_WHITE
    );

    setupLabelSize(
        'almiSilverSize',
        'almiSilverLabelBtn',
        LABEL_SIZE_MAP_SILVER
    );

    setupLabelSize(
        'almiColorSize',
        'almiColorLabelBtn',
        LABEL_SIZE_MAP_COLOR
    );

    setupLabelSize(
        'brownBottleSize',
        'brownBottleLabelSizeBtn',
        LABEL_SIZE_MAP_BROWN
    );

    setupBoxSize(
        'brownBottleSize',
        'brownBoxSizeBtn',
        BOX_SIZE_MAP_BROWN
    );

    setupLabelSize(
        'wFlostBottleSize',
        'wFlostBottleLabelSizeBtn',
        LABEL_SIZE_MAP_WFLOST
    );

    setupBoxSize(
        'wFlostBottleSize',
        'wFlostBoxBtn',
        BOX_SIZE_MAP_WFLOST
    );

    setupLabelSize(
        'plaBottleSize',
        'plaBottleLabelSizeBtn',
        LABEL_SIZE_MAP_PLASTIC
    );

    setupBoxSize(
        'plaBottleSize',
        'plaBottleBoxSizeBtn',
        BOX_SIZE_MAP_PLASTIC
    );
});

UI.CaseNo.In.addEventListener('blur', (evt) => {

    if (evt.target.value.length > 0) {
        UI.CaseNo.In.value =
            StringUtil.formatCode(evt.target.value).toUpperCase();
    }
});

UI.Button.Calc.addEventListener('click', (evt) => {

    evt.preventDefault();

    if (!UI.EstForm.Base.checkValidity()) {

        evt.stopPropagation();
        UI.EstForm.Base.classList.add('was-validated');

        return;
    }

    const formData = ServiceUtil.mergeForms(
        UI.EstForm.Base,
        UI.EstForm.Main,
        UI.EstForm.Spec
    );

    console.log(formData);

    sessionStorage.setItem(
        'createdAt',
        UI.CreatedAt.In.value
    );

    sessionStorage.setItem(
        'caseNo',
        UI.CaseNo.In.value
    );

    sessionStorage.setItem(
        'customerName',
        UI.CustomerName.In.value
    );

    window.location.href = '/bs-sample/result.html';
});

//TOPへ戻る
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.location.href = "top.html";
    });
}