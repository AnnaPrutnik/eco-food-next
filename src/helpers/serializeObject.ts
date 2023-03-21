import { Require_id, Types } from 'mongoose';

type ArgumentType<T> = Require_id<T>;

export function serializeObject<T>(mongoResult: ArgumentType<T>) {
	const result = mongoResult;
	const { _id: id } = mongoResult;
	result._id = (id as Types.ObjectId).toString();
	return result;
}
