import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import Filters from './components/Filters/Filters.jsx'
import UserTable from './components/UserTable/UserTable.jsx'
import UserModal from './components/UserModal/UserModal.jsx'
import Pagination from './components/Pagination/Pagination.jsx'

function App() {
    const {
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
    } = useUsers()

    const [selectedUser, setSelectedUser] = useState(null)

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-600">Ошибка: {error}</div>
    }

    const totalPages = Math.ceil(total / limit)

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-[1400px] mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Список пользователей</h1>

                <Filters
                    search={search}
                    setSearch={setSearch}
                    gender={gender}
                    setGender={setGender}
                />

                <div className="text-center mb-4 text-gray-600">
                    Найдено: {total}
                </div>

                <UserTable
                    users={users}
                    sortField={sortField}
                    sortOrder={sortOrder}
                    getSortIndicator={getSortIndicator}
                    handleSort={handleSort}
                    onSelectUser={setSelectedUser}
                />

                {totalPages > 1 && (
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                    />
                )}

                {selectedUser && (
                    <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
                )}
            </div>
        </div>
    )
}

export default App