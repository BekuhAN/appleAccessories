import { FormEvent, ReactElement, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./cart.module.scss";
import {
  Alert,
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Form,
  Input,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotal } from "../../features/cart/cart";
import Product from "../product/product";
import emailjs from "@emailjs/browser";

const priceFormat = (price: number) =>
  price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

export default function Cart(): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const list = useSelector(getCart);
  const total = useSelector(getTotal);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    isError: false,
    text: "",
  });
  const [loading, setLoading] = useState(false);
  let sendTemplate = "";

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //hqvlamo357@ramvv.com
    setLoading(true);
    emailjs
      .sendForm("service_099qjgo", "template_306q5sv", formRef.current || "", {
        publicKey: "S1l_xUmzgej3DKyLo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSuccess(true);
          e.currentTarget.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setError({ isError: true, text: error.text });
        }
      );
  };
  return (
    <>
      <div className={styles.cart__icon} onClick={onOpen}>
        <Badge color="danger" placement="bottom-right" content={list.length}>
          <Tooltip
            content="Корзина"
            showArrow={true}
            placement="bottom"
            color="danger"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Tooltip>
        </Badge>
      </div>
      <Drawer size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Корзина
              </DrawerHeader>
              <DrawerBody>
                {list.length > 0 ? (
                  <div className={styles.cart__list}>
                    {list.map((item) => (
                      <Product
                        key={item.id}
                        item={item}
                        isRow={true}
                        isCart={true}
                      />
                    ))}
                  </div>
                ) : (
                  <div>Пусто :(</div>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Form
                  className="w-full flex gap-4 flex-row flex-wrap"
                  validationBehavior="native"
                  ref={formRef}
                  onSubmit={sendEmail}
                >
                  <Input
                    classNames={{ base: "w-50 flex-1", inputWrapper: "h-50" }}
                    isRequired
                    errorMessage="Поле должно быть заполнено"
                    label="Имя"
                    labelPlacement="outside"
                    name="order_name"
                    placeholder="Ваше имя"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    classNames={{ base: "w-50 flex-1 ", inputWrapper: "h-50" }}
                    isRequired
                    errorMessage="Не верно введена электронная почта"
                    label="Электронная почта"
                    labelPlacement="outside"
                    name="order_email"
                    placeholder="Ваша электронная почта"
                    type="tel"
                    variant="bordered"
                  />
                  <Textarea
                    className="w-full"
                    label="Комментарий"
                    labelPlacement="outside"
                    placeholder="Ваш комментарий"
                    variant="bordered"
                    name="order_text"
                  />
                  <textarea
                    className="hidden"
                    name="order_list"
                    value={sendTemplate}
                  ></textarea>
                  <div className={styles.cart__total}>
                    Общая сумма: {""}
                    {priceFormat(total)} ₽
                  </div>
                  <Button isLoading={loading} type="submit" color="primary">
                    Отправить
                  </Button>
                  <Button
                    color="warning"
                    variant="ghost"
                    onPress={() => dispatch(clearCart())}
                  >
                    Очистить
                  </Button>
                  <Button color="danger" variant="ghost" onPress={onClose}>
                    Отмена
                  </Button>
                  {success && (
                    <Alert color="success" title="Заказ успешно отправлен!" />
                  )}
                  {error.isError && (
                    <Alert
                      color="danger"
                      title={`Что-то пошло не так... Ошибка { ${error.text} }`}
                    />
                  )}
                </Form>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
