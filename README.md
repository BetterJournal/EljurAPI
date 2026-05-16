<div align="center">
	<a href="https://betterjournal.ru">
		<picture>
      <img alt="BetterJournal Logo" src="https://betterjournal.ru/icon.svg" height="128">
    </picture>
	</a>
  <h1>@betterjournal/eljur-api</h1>
  
<a href="https://betterjournal.ru"><img alt="Made for people" src="https://img.shields.io/badge/MADE%20FOR%20PEOPLE-000000?style=for-the-badge&logo=pipecat&logoColor=e12afb"></a>
<a href="https://www.npmjs.com/package/%40betterjournal%2Feljur-api"><img alt="NPM version" src="https://img.shields.io/npm/v/%40betterjournal%2Feljur-api?style=for-the-badge&labelColor=000000"></a>
<a href="https://github.com/BetterJournal/EljurAPI/blob/main/COPYING"><img alt="License" src="https://img.shields.io/npm/l/%40betterjournal%2Feljur-api?style=for-the-badge&labelColor=000000"></a>

</div>

## О проекте

> [!WARNING] 
> Данная библиотека была создана энтузиастом на основе личных наблюдений по работе с API ЭлЖура.

Данный проект создан **для людей**.  
Мы хотим предоставить удобную и читаемую документацию для заинтересованных лиц. Для этого, как один из этапов, была создана данная библиотека, которая описывает необходимые сущности, для работы с API ЭлЖура.  
Если вы являетесь разработчиком на JavaScript или TypeScript (или просто ознакомлены с данными языками) - вы точно также можете спокойно и удобно использовать данную библиотеку.

## Документация

> [!NOTE] 
> Данная документация основана на данной библиотеке, а точнее её ветке [`open-api`](https://github.com/BetterJournal/EljurAPI/tree/open-api). Она была отдельно создана, чтобы не захламлять библиотеку лишними зависимостями и кусочками кода.

Для просмотра полной документации посетите [https://betterjournal.ru/eljur-api](https://betterjournal.ru/eljur-api).

## Использование

### В качестве типизации:

```bash
npm install -D @betterjournal/eljur-api
```

```ts
import type { FromEljurAPI, ByStudents, IDiaryRecord } from "@betterjournal/eljur-api";

(async () => {
	const res = await fetch(/*...*/);
	const user = await res.json() as FromEljurAPI<ByStudents<IDiaryRecord>>

	//...
})();
```

### Напрямую:

```bash
npm install @betterjournal/eljur-api
```

```ts
import { fromEljurAPI, byStudents, DiaryRecord } from "@betterjournal/eljur-api";

(async () => {
	const res = await fetch(/*...*/);
	const user = fromEljurAPI(byStudents(DiaryRecord)).parse(await res.json())

	//...
})();
```

---

> [!IMPORTANT] 
> Имейте в виду, что типы могут отличаться в зависимости от конкретной системы.

Огромная благодарность каждому, кто установит данную библиотеку.  
Желаем каждому успехов!