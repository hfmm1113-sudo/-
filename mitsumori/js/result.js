// 外部モジュールの読み込み
import { UI, } from './components.js';
import { DateUtil, StringUtil, ServiceUtil, } from './components.js';


// 初期表示：Webページロード時
window.addEventListener('load', (evt) => {
    // 【テスト用】
    UI.CreatedAt.Out.textContent = sessionStorage.getItem('createdAt');
    UI.CaseNo.Out.textContent = sessionStorage.getItem('caseNo');
    UI.CustomerName.Out.textContent = sessionStorage.getItem('customerName');
});


// 閉じるボタン：
UI.Button.Back.addEventListener('click', (evt) => {
    //
    evt.preventDefault();

    // 【テスト用】
    sessionStorage.clear();
    window.location.href = '/bs-sample/';
});

// 再見積もりボタン：
UI.Button.Retry.addEventListener('click', (evt) => {
    //
    evt.preventDefault();

    // 【テスト用】
    window.location.href = '/bs-sample/';
});

// 見積書発行ボタン：
UI.Button.Exec.addEventListener('click', (evt) => {
    //
    evt.preventDefault();

    // 【テスト用】
    window.open(
        '/bs-sample/result/sample_estimate.pdf',
        '_blank'
    );
});