//! server/middlewares/notFound.js

export default function notFound(req, res) {
	res.status(404).json({
		ok: false,
		error: {
			code: 'NOT_FOUND',
			message: `Route not found: ${req.method} ${req.originalUrl}`,
		},
	});
}
