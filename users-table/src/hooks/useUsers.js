import { useState, useEffect } from 'react'

export function useUsers() {
    const [users, setUsers] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1)
    const [sortField, setSortField] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)

    const [search, setSearch] = useState('')
    const [gender, setGender] = useState('')

    const limit = 10

    const fetchUsers = async () => {
        setLoading(true)
        setError(null)

        let url = 'https://dummyjson.com/users'

        url += `?limit=${limit}&skip=${(page - 1) * limit}`

        if (search.trim()) {
            url = `https://dummyjson.com/users/search?q=${encodeURIComponent(search.trim())}&limit=${limit}&skip=${(page - 1) * limit}`
        } else if (gender) {
            url = `https://dummyjson.com/users/filter?key=gender&value=${gender}&limit=${limit}&skip=${(page - 1) * limit}`
        }

        if (sortField && sortOrder && ['lastName', 'age', 'gender', 'phone'].includes(sortField)) {
            url += `&sortBy=${sortField}&order=${sortOrder}`
        }

        try {
            const res = await fetch(url)
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            setUsers(data.users || [])
            setTotal(data.total || 0)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [page, sortField, sortOrder, search, gender])

    const handleSort = (field) => {
        if (sortField === field) {
            if (sortOrder === 'asc') setSortOrder('desc')
            else if (sortOrder === 'desc') {
                setSortOrder(null)
                setSortField(null)
            } else setSortOrder('asc')
        } else {
            setSortField(field)
            setSortOrder('asc')
        }
        setPage(1)
    }

    const getSortIndicator = (field) => {
        if (sortField !== field) return ''
        if (sortOrder === 'asc') return ' ↑'
        if (sortOrder === 'desc') return ' ↓'
        return ''
    }

    return {
        users,
        total,
        loading,
        error,
        page,
        setPage,
        limit,
        sortField,
        sortOrder,
        getSortIndicator,
        handleSort,
        search,
        setSearch,
        gender,
        setGender,
    }
}