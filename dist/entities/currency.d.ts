/**
 * A currency is any fungible financial instrument on Celo, including all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is CGLD.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly CGLD_CURRENCY: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.CGLD_CURRENCY`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const CGLD_CURRENCY: Currency;
export { CGLD_CURRENCY };
