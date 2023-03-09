import { Document, IfAny, Require_id } from 'mongoose';

type ArgumentType<T> = IfAny<
	T,
	any,
	Document<unknown, {}, T> & Omit<Require_id<T>, never>
>;

export function transformMongoResult<T>(mongoResult: ArgumentType<T>) {
	// console.log(mongoResult);
	// return mongoResult;

	const result = mongoResult.toObject();
	const id = result._id.toString();
	delete result._id;
	return { id, ...result };
}
