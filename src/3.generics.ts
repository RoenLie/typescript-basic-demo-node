
//const genericOutput = ( input: any ) => {

//	return input;
//};

const genericOutput = <T = any>( input: T ) => {
	return input;
};

const output = genericOutput( 1 );