import { Document, IfAny, Require_id } from 'mongoose';

type ArgumentType<T> = Require_id<T>;

export function serializeObject<T>(mongoResult: ArgumentType<T>) {
	const result = mongoResult;
	result._id = mongoResult._id.toString();
	return result;
}
