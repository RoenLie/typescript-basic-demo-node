// How does one create a custom type or interface and what is the differences.
type NumberOrString = string | number;

type obj1 = {
	kake: string;
};
type obj2 = {
	pai: string;
};


type EnhancedElement = HTMLElement & {
	pai: string;
};

interface Enhanced extends HTMLElement {
	[ key: string ]: any;
}


const test: NumberOrString = 'test';

type Water = 'wet';

type GetWater = ( bucketSize: 'small' | 'large' ) => Water;

type Fn = ( ...args: any[] ) => any;


interface IIsInterface<T> {
	waterLevel: number;
	getWater: GetWater;
}


const testInterface: IIsInterface<any> = {
	waterLevel: 0,
	getWater: function ( bucketSize: "small" | "large" ): "wet" {
		throw new Error( "Function not implemented." );
	}
};


class testClass<T> implements IIsInterface<T> {
	waterLevel: number;
	getWater: GetWater;

}