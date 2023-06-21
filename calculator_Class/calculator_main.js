const { BMICalculator } = require('../.vscode/Calculator/BMICalculator.js');
const { SalaryCalculator } = require('../.vscode/Calculator/salaryCalculator');
const { NormalCalculator } = require('../.vscode/Calculator/NomalCalculator.js');
const { PercentCalculator } = require('../.vscode/Calculator/PercentCalculator.js');


// class GradeCalculator extends Calculator { }

const CalculatorFactory = (function () {
    func = function () { };

    func.create = function (calculatorType) {
        return {
            'BMI': new BMICalculator(),
            'Percent': new PercentCalculator(),
            'Normal': new NormalCalculator(),
            'Salary': new SalaryCalculator()
        }[calculatorType];
    }
    return Object.freeze(func);
})();

const CalculatorStrategy = (function () {
    class CalculatorStrategy {
        constructor() {
            this.calculator = null;
        }
        setStrategy(calculator) {
            this.calculator = CalculatorFactory.create(calculator);
        }
        doIntroduce() {
            this.calculator.introduce();
        }
        doCalculate() {
            this.calculator.calculate();
        }
        doPrint() {
            this.calculator.print();
        }
    }
    return CalculatorStrategy;
})();



const Main = type => {
    let calculatorStrategy = new CalculatorStrategy();
    console.log(type + "계산기 테스트입니다.");

    calculatorStrategy.setStrategy(type);
    calculatorStrategy.doIntroduce();
    calculatorStrategy.doCalculate();
    calculatorStrategy.doPrint();
}


