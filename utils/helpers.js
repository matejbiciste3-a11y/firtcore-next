export const formatPrice = (price, currency = 'Kč') => {
    return `${price} ${currency}`
}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}