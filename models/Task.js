const db = require('../db/config');

class Task {
	constructor(task) {
		this.id = task.id || null;
		this.title = task.title;
		this.description = task.description;
		this.time_limit = task.time_limit;
		this.start_date = task.start_date;
		this.sprints = task.sprints;
	}

	static getAll() {
		return db
			.manyOrNone(
				`SELECT * FROM tasks
        ORDER BY start_date ASC`
			)
			.then((tasks) => {
				return tasks.map((task) => new this(task));
			});
	}

	static getById = (id) => {
		return db
			.oneOrNone(
				`SELECT * FROM tasks
        WHERE id = $1`,
				id
			)
			.then((task) => {
				task && new this(task);
				throw new Error(`Task ${id} not found!`);
			});
	};

	save() {
		return db
			.one(
				`INSERT INTO tasks
        (title, description, time_limit, start_date, sprints)
        VALUES ($/title, $/description, $/time_limit, $/start_date, $/sprints)
        RETURNING *`,
				this
			)
			.then((task) => Object.assign(task));
	}

	delete() {
		return db.none(
			`DELETE * FROM tasks
      WHERE id = $1`,
			this.id
		);
	}
}

module.exports = Task;
