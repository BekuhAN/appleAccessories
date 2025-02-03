import { ReactElement } from "react";
import styles from "./wishlist.module.scss";
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getWishList, setWishList } from "../../features/wishlist/wishlist";
import Product from "../product/product";

export default function Wishlist(): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const list = useSelector(getWishList);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.wishlist__icon} onClick={onOpen}>
        <Badge color="danger" placement="bottom-right" content={list.length}>
          <Tooltip
            content="Избранное"
            showArrow={true}
            placement="bottom"
            color="danger"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Tooltip>
        </Badge>
      </div>
      <Drawer size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Избранное
              </DrawerHeader>
              <DrawerBody>
                {list.length > 0 ? (
                  <div className={styles.wishlist__list}>
                    {list.map((item) => (
                      <Product key={item.id} item={item} isRow={true} />
                    ))}
                  </div>
                ) : (
                  <div>Пусто :(</div>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button
                  color="warning"
                  variant="ghost"
                  onPress={() => dispatch(setWishList([]))}
                >
                  Очистить
                </Button>
                <Button color="default" variant="ghost" onPress={onClose}>
                  Закрыть
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
