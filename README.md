# Introduce
이 프로젝트는 자바스크립트의 프로토타입 기반 객체지향의 특성을 이용하여 설계하였습니다.

다양한 계산기의 구조를 디자인패턴을 적용하여 설계하는 것에 목적이 있습니다.

# Design patterns
- Simple Factory Pattern
- Strategy Pattern
- Facade Pattern
- Template Method Pattern
- Proxy Pattern
- Builder Pattern

# Functions
### Main
- 계산기를 선택하고 필요한 기능들을 실행할 수 있게 설계했습니다.
- Design patterns
    - Simple Factory Pattern으로 각 객체들을 생성합니다.
    - Strategy Pattern을 사용하여 사용자가 원하는 기능을 사용할 수 있게 설계했습니다.
### Obesity Calculator
- 부모 Calculator의 메서드를 재정의하여 비만도를 측정할 수 있도록 설계했습니다.
### Credit Calculator
- 사용자에게 학점 정보와 계산 방식을 입력받고, 계산 결과를 출력해주도록 설계했습니다.
- Design patterns
    - Proxy Pattern을 사용하여 사용자에게 계산 방식만 선택할 수 있게 하고, 계산 방법은 비공개로 처리하도록 설계하였습니다.
### Normal Calculator
- 연산 종류와 값을 입력하면 연산 결과가 출력되도록 설계했습니다.
- Design patterns
    - Builder Pattern을 사용하여 복잡한 객체를 생성할 때 하나씩 생성 및 전달할 수 있도록 설계했습니다.
### Percent Calculator
- 사용자가 원하는 방식의 퍼센트계산을 할 수 있도록 설계했습니다.
- Design patterns
    - Template Method Pattern을 사용하여 추상 메서드의 기능을 각 함수에서 재정의하고, 메서드로 묶어서 사용하는 방식으로 설계했습니다.
### Salary Calculator
- 주휴수당과 세금 적용 여부에 따라 계산방식을 달리 하도록 설계했습니다.
- Design patterns
    - Facade Pattern을 사용하여 부모 클래스에 정의된 기능을 묶어서 사용하도록 설계했습니다.
