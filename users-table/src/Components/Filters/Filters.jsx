export default function Filters({ search, setSearch, gender, setGender }) {
    return (
        <div className="max-w-[1400px] mx-auto px-4 mb-6">
            <div className="bg-white p-5 rounded-lg shadow border grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Поиск</label>
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="ФИО, телефон...."
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Пол</label>
                    <select
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Все</option>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
            </div>
        </div>
    )
}