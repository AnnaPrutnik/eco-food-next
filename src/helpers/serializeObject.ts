import { Document, IfAny, Require_id } from 'mongoose';

type ArgumentType<T> = IfAny<
	T,
	any,
	Document<unknown, {}, T> & Omit<Require_id<T>, never>
>;

export function serializeObject<T>(mongoResult: ArgumentType<T>) {
	const result = mongoResult.toObject();
	result._id = result._id.toString();
	return result;
}
