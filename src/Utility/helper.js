export const dateParse = (_date) => {
    _date = new Date(_date);
    const Day = _date.getDay();
    const month = _date.getMonth();
    const year = _date.getFullYear();
    return [Day, month, year]
};

export const TimeParse = (_date) => {
    const date = new Date(_date);

};


