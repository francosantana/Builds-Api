
export default interface googleUtilsType {
    getUrl: ()=> string,
    getUser: (code: string)=> Promise<{}>
}
