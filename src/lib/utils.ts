export function isValidString(email: unknown, lengthLimit: number): boolean {
	if (!email || typeof email !== "string" || email.length > lengthLimit)
		return false;
	return true;
}

export function getErrorMessage(error: unknown): string {
	let message: string;

	if (error instanceof Error) message = error.message;
	else if (typeof error === "string") message = error;
	else message = "Something went wrong";

	return message;
}
