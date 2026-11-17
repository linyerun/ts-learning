export const T1: string = '111'

export const T2: string = '222'

export default {
    T1: '000',
    T2: '111',
    F1: () => console.log('11111'),
}

export {} // 空导出：它不导出任何值，但会让当前文件被识别为模块（module），而不是全局脚本（script）