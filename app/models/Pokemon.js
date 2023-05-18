



export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.image = data.sprite.front_shiny
  }
  get ActivePokemonCardTemplate() {
    return /*html*/`
      <div class="card sticky-top my-4">
        <div class="card-body">
          <p class="fs-2">${this.image.sprite}</p>
        </div>
      </div>
    `
  }


}
