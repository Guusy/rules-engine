import { smoke } from "./smoke";

describe('smoke', () => {
    it('true', () => {
        expect(smoke).toEqual('yes');
    });
});