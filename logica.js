class Carro{
  constructor(marca, cor, combustivelAbastecido, combustivelRestante, consumo, capacidadeTanque, precoCombustivel, saldo)
  {
    this.marca = marca
    this.cor = cor
    this.combustivelAbastecido = combustivelAbastecido
    this.combustivelRestante = combustivelRestante
    this.consumo = consumo
    this.capacidadeTanque = capacidadeTanque
    this.precoCombustivel = precoCombustivel
    this.saldo = saldo
  }

  dirigir(km){
    let litrosConsumidos = this.combustivelRestante / km
    this.consumo += litrosConsumidos
    console.log(`A média de consumo esta ${litrosConsumidos}KM por litro`)
  }

  totalDinheiro(valor){
    let dinheiro = valor
    this.saldo += dinheiro
  }

  valorGasolina(gasolina){
    let precoLitro = gasolina
    if((this.combustivelAbastecido * precoLitro) < this.saldo){
      console.log(`A gasolina esta R$${gasolina} o litro, você tem R$${this.saldo} na carteira`)
      this.precoCombustivel += precoLitro * this.combustivelAbastecido
      console.log(`Foi abatecido ${this.combustivelAbastecido} litros, que deu um total de R$${this.precoCombustivel} e sobrou na carteira R$${this.saldo - this.precoCombustivel}`)
    } else console.log(`Você não tem dinheiro para abastecer, seu saldo é de R$${this.saldo}`)
  }

  valorEtanol(etanol){
    let precoLitro = etanol
    if((this.combustivelAbastecido * precoLitro) < this.saldo){
      console.log(`O etanol esta R$${etanol} o litro, você tem R$${this.saldo} na carteira`)
      this.precoCombustivel += precoLitro * this.combustivelAbastecido
      console.log(`Foi abatecido ${this.combustivelAbastecido} litros e sobrou na carteira R$${this.saldo - this.precoCombustivel}`)
    } else console.log(`Você não tem dinheiro para abastecer, seu saldo é de R$${this.saldo}`)
   }

  valorDiesel(diesel){
    let precoLitro = diesel
    if((this.combustivelAbastecido * precoLitro) < this.saldo){
      console.log(`O Diesel esta R$${diesel} o litro, você tem R$${this.saldo} na carteira`)
      this.precoCombustivel += precoLitro * this.combustivelAbastecido
      console.log(`Foi abatecido ${this.combustivelAbastecido} litros e sobrou na carteira R$${this.saldo - this.precoCombustivel}`)
    } else console.log(`Você não tem dinheiro para abastecer, seu saldo é de R$${this.saldo}`)
  }

  combustivelTanque(restante){
    let litrosExistente = this.capacidadeTanque - (this.capacidadeTanque - restante)
    this.combustivelRestante += litrosExistente
  }

  abastecer(litros){
    if ((this.combustivelRestante + litros) < this.capacidadeTanque){
      this.combustivelRestante += litros
      this.combustivelAbastecido += litros
      console.log(`Contem no tanque ${this.combustivelRestante} litros, foi abastecido ${litros} Litros, faltam ${this.capacidadeTanque - this.combustivelRestante} litros para encher o tanque`)
    } else console.log("Tanque Cheio!!")
  }
}

let carro = new Carro("VW", "Branco", 0, 0, 0, 50, 0, 0)

carro.combustivelTanque(10)

carro.totalDinheiro(100)

carro.abastecer(15)

carro.valorGasolina(5)

carro.dirigir(10)

console.log(carro)
