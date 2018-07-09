USER STORIES:
	- see home-page
	- see all cocktails (cocktails-page)
	- search cocktails by ingridient
	- see one cocktail (cocktail-details page)
	- see all users(users-page)
	- see one user(user-detail-page)
	- signup
	- login
	- logout
	- edit profile
	- create cocktail
	- edit cocktail
	- delete cocktail


PAGES:
	- /  				pages/home-page
	- /cocktails 			pages/cocktails-list-page 
	- /cocktails?ingredient		pages/cocktails-list-page
	- /cocktails/create		pages/cocktails-create-page
	- /cocktails/cocktail:id	pages/cocktail-detail-page
	- /cocktails/cocktail:id/edit	pages/cocktail-edit-page
	- /users			pages/users-page
	- /users/user:id		pages/user-detail-page
	- /users/user:id/edit		pages/user-edit-page
	- /signup			pages/signup-page
	- /login			pages/login-page


COMPONENTS:
	 - components/cocktail-item
		· @Input - cocktail(object)
			 - showButtons(boolean)

		· @Output - delete

SERVICES:
	- services/cocktail
			·listAll()
			·listByIngredient(ingredient)
			·getOne(id)
			·deleteOne(id)
			.createOne(cocktail)
			·editCocktail(cocktail)

	- services/user
			·listAll()
			·getOne(id)

	- services/auth
			·login(user)
			·signup(user)
			·logout()
			·me()
			·editUser(user)

MODELS:
	- cocktail 
		·name: String, required
		·glass: String, required
		·category: String
		·ingredients: Array [{unit: String, amount: String, ingredient:String}]
		·garnish: String
		·preparation: String, required
		·isIBA: boolean
		·imageUrl: String
		.owner: ObjectId
	- user
		·username: String, required
		·password: String, required

BACKEND ROUTES:
	auth:
		·POST /auth/login
		·POST /auth/signup
		·POST /auth/logout
		·GET /auth/me

	cocktails:
		·POST /cocktails
		·GET /cocktails
		·GET /cocktails/?ingredient
		·PUT /cocktails/:id
		·DELETE /cocktails/:id
		·GET /cocktails/:id

	users: 
		·GET /users
		·GET /users/:id
	


