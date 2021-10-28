export const Sort = (props, arg) => {
    let data = arg
    //*** ascending ***
    switch (props.sort.email.ascending) {
        case true:
            return data.sort((prev, next) => prev.email - next.email)
    }
    switch (props.sort.state.ascending) {
        case true:
            return data.sort((prev, next) => prev.state - next.state)
    }
    switch (props.sort.phone.ascending) {
        case true:
            return data.sort((prev, next) => prev.phone - next.phone)
    }
    switch (props.sort.firstName.ascending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.firstName < next.firstName) return -1;
                if (prev.firstName < next.firstName) return 1;
            });
    }
    switch (props.sort.lastName.ascending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.lastName < next.lastName) return -1;
                if (prev.lastName < next.lastName) return 1;
            });
    }

    //*** descending ***
    switch (props.sort.email.ascending) {
        case true:
            return data.sort((prev, next) => next.email - prev.email)
    }
    switch (props.sort.state.ascending) {
        case true:
            return data.sort((prev, next) => next.state - prev.state)
    }
    switch (props.sort.phone.descending) {
        case true:
            return data.sort((prev, next) => next.phone - prev.phone)
    }
    switch (props.sort.firstName.descending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.firstName > next.firstName) return -1;
                if (prev.firstName > next.firstName) return 1;
            });
    }
    switch (props.sort.lastName.descending) {
        case true:
            return data.sort((prev, next) => {
                if (prev.lastName > next.lastName) return -1;
                if (prev.lastName > next.lastName) return 1;
            });
    }

    return data
}
