export class Session {
	constructor({address, date, host, startTime = "11:00 AM"}) {
		this.address = address;
		this.date = date;
		this.host = host;
        this.startTime = startTime;
	}
}
