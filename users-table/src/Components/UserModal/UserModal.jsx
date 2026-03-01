export default function UserModal({ user, onClose }) {
    if (!user) return null

    const fullName = [user.lastName, user.firstName, user.maidenName]
        .filter(Boolean)
        .join(' ') || '—'

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Информация о пользователе</h2>
                    <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-800">
                        ×
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <img
                            src={user.image || 'https://via.placeholder.com/120'}
                            alt={fullName}
                            className="w-32 h-32 rounded-full object-cover border"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold">{fullName}</h3>
                            <p className="text-lg mt-1">
                                Возраст: <span className="font-medium">{user.age || '—'}</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">Контакты</h4>
                            <p>Телефон: {user.phone || '—'}</p>
                            <p>Email: {user.email || '—'}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Параметры</h4>
                            <p>Рост: {user.height ? Math.round(user.height) + ' см' : '—'}</p>
                            <p>Вес: {user.weight ? Math.round(user.weight) + ' кг' : '—'}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Адрес</h4>
                        <p>{user.address?.address || '—'}</p>
                        <p>
                            {user.address?.city || '—'}, {user.address?.country || '—'}
                        </p>
                    </div>
                </div>

                <div className="p-6 border-t bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    )
}